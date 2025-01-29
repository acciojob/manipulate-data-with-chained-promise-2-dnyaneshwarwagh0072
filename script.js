function getNumbers(){
	return new promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000);
	});
}

document.addEventListener("DOMContentLoaded",() =>{
	const outputDiv = document.getElementById("output");

	getNumbers().then((numbers)=>{
		return new promise((resolve)=>{
			setTimeout(()=>{
				const evens = numbers.filter(num => num % 2 ===0);
				outputDiv.textContent = `Filtered Evens: ${evens.join(", ")}`;
				resolve(evens);
			},1000);
		});
	})
	.then((evenNumbers) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const doubled = evenNumbers.map(num => num * 2); // Step 3: Multiply even numbers by 2
                    outputDiv.textContent = `Doubled Evens: ${doubled.join(", ")}`;
                    resolve(doubled);
                }, 2000);
            });
        })
        .catch(error => console.error("Error:", error));
});