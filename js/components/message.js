function alertMessage(alertType="", message=""){
    loading.classList.add("hide");
    return `<div class="${alertType}">${message}</div>`
}