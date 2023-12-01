<script lang="ts">
	import { setContext } from "svelte";
	setContext('lang', 'sv');

	let num: number = 0;
	let title: string = "";

	function rollDice(){
		num = Math.floor(Math.random() * 6) + 1;
	}


	function handleKey(event){
		rollDice();
		
		switch(event.key){
			case "d": {
				title = "David 🐉";
				break;
			}

			case "m": {
				title = "Myra 🦄";
				break;
			}

			case "k": {
				title = "Karolina 🦜";
				break;
			}

			default:{
				title = "";
				break;
			}
		}
	}

</script>

<svelte:body on:keydown={handleKey} />

<button on:click={() => {rollDice()}}>KASTA TÄRNING</button>

<div id="dice">{num}</div>
<div id="title">{title}</div>

<style>
	button{
		background-color: palevioletred;
		color: #fff;
		padding: 1rem;
		border-radius: 1rem;
		border: none;
		font-size: 1.5rem;
	}

	#dice{
		width: 100px;
		height: 100px;
		color: white;
		background-color: purple;
		border-radius: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
	}

	#title{
		width: 220px;
		height: 40px;
		color: black;
		background-color: yellow;
		border-radius: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;	}
</style>