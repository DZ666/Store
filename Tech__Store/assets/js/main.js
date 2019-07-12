const openWindowWithCallBack = () => {
	document.querySelector("#callBack").innerHTML = `
		<div class="callBackWindow">
			<form method="post" class="window" action="#">
				<p>Введите ваш номер телефона чтобы мы могли связаться с вами</p>
				<p>Номер: 
					<input
						type="tel"
						maxlength="11"
						placeholder="+7 (000) 000 00 00"
						name="custumersNum"
						pattern="8[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
					/>
				</p>
				<div class="btns">
					<button onclick="back()" id="back">Вернуться</button>
					<button onclick="send()" id="send">Отправить</button>
				</div>
			</form>
		</div>
	`
}