function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 2000); // Reduced delay to 2 seconds
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
            }, 1000); // First update after 1 second
        });
    })
    .then((evenNumbers) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map((num) => num * 2);
                updateOutput(multipliedNumbers.join(", "));
                resolve(multipliedNumbers);
            }, 1000); // Second update after 1 second
        });
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
