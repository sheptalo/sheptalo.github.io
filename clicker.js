let money = 0;
let tg = window.Telegram.WebApp;
let work = document.getElementById('work');
tg.MainButton.show()

tg.expand(); //расширяем на все окно  
tg.MainButton.text = "Закончить работу";
tg.MainButton.textColor = "#ffffff"; //изменяем цвет текста кнопки

tg.expand();
work.addEventListener('click', function func() {
  money += 1;
  console.log(money);
  
})



Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData('${money}'); 
});