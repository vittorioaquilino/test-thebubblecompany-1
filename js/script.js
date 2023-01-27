// metodo per visualizzare il contenuto della tab
function showTab(event, tabName) {
//   dichiaro una variabile per il contenuto della tab
  let tabContent;
//   dichiaro una variabile per il bottone della tab
  let tabButton;
//   prelevo tutti gli elementi con la classe tabs-content e li nascondo
  tabContent = document.getElementsByClassName("tabs-content");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
//   prelevo tutti gli elementi con la classe tabs-button e rimuovo la classe active
  tabButton = document.getElementsByClassName("tabs-button");
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }
//   visualizzo il contenuto della tab cliccata
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}