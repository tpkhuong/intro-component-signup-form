function ourSelectors() {
  var arrInputElementsWithRequiredAttr =
    document.querySelectorAll("input[required]");
  var submitBtn = document.getElementById("submit-btn");

  return {
    arrInputElementsWithRequiredAttr,
    submitBtn,
  };
}

customeValidMessage();

function customeValidMessage(
  /***** check element.validity.valid *****/
  { arrInputElementsWithRequiredAttr, submitBtn } = ourSelectors()
) {
  submitBtn.addEventListener("click", function showInvalidMessage(event) {
    /***** loop through the input elements *****/
    arrInputElementsWithRequiredAttr.forEach(function printStuff(eachInput) {
      if (!eachInput.validity.valid) {
        testStr = "hello world";
        let spanElementInErrorContainer = eachInput.nextElementSibling;
        let imgContainerWithErrorImg =
          spanElementInErrorContainer.nextElementSibling;
        eachInput.classList.add("invalid-message-border");
        spanElementInErrorContainer.classList.remove("hide");
        imgContainerWithErrorImg.classList.remove("hide");
      } else if (eachInput.validity.valid) {
        let spanElementInErrorContainer = eachInput.nextElementSibling;
        let imgContainerWithErrorImg =
          spanElementInErrorContainer.nextElementSibling;
        eachInput.classList.remove("invalid-message-border");
        spanElementInErrorContainer.classList.add("hide");
        imgContainerWithErrorImg.classList.add("hide");
      }
    });
    /***** loop through the input elements *****/
  });

  window.addEventListener("load", function clearInputs(event) {
    arrInputElementsWithRequiredAttr.forEach(function clearEachInputValue(
      inputElement
    ) {
      inputElement.value = "";
    });
  });
}
