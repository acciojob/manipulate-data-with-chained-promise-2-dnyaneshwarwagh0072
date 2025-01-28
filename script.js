function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

function updateOutput(text) {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = text;
}

getNumbers()
    .then((numbers) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = numbers.filter((num) => num % 2 === 0);
                updateOutput(evenNumbers.join(", "));
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map((num) => num * 2);
                updateOutput(multipliedNumbers.join(", "));
                resolve(multipliedNumbers);
            }, 2000);
        });
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
