//handle calculation button event

document.getElementById("calculate-button").addEventListener("click", function () {
    const income = document.getElementById("inputIncome");
    const newIncometext = income.value;

    // check for valid income
    if (parseFloat(newIncometext) >= 0) {
        document.getElementById("incomeAlert").innerText = "";
        const newIncome = parseFloat(newIncometext);
        const food = document.getElementById("food");
        const newfoodtext = food.value;

        // check for valid food
        if (parseFloat(newfoodtext) >= 0) {
            document.getElementById("foodAlert").innerText = "";
            const newFood = parseFloat(newfoodtext);
            const rent = document.getElementById("rent");
            const newrenttext = rent.value;

            // check for valid rent
            if (parseFloat(newrenttext) >= 0) {
                document.getElementById("rentAlert").innerText = "";
                const newRent = parseFloat(newrenttext);
                const clothes = document.getElementById("clothes");
                const newclothestext = clothes.value;

                // check for valid rent
                if (parseFloat(newclothestext) >= 0) {
                    document.getElementById("clothesAlert").innerText = "";
                    const newClothes = parseFloat(newclothestext);

                    // calculate total expenses
                    const expenses = newFood + newRent + newClothes;
                    if (expenses >= 0 && expenses <= newIncome) {
                        document.getElementById("total-expense").innerText = expenses;

                        // calculate total balance
                        const balance = newIncome - expenses;
                        if (balance >= 0) {
                            document.getElementById("balance").innerText = balance;
                        }
                        else {
                            document.getElementById("balanceAlert").innerText = "No balance left";
                        }
                    }

                    else {
                        document.getElementById("expenseAlert").innerText = "Expense is more than income";
                    }

                }

                else {
                    document.getElementById("clothesAlert").innerText = "invalid input";
                }
            }

            else {
                document.getElementById("rentAlert").innerText = "invalid input";
            }
        }

        else {
            document.getElementById("foodAlert").innerText = "invalid input";
        }
    }
    else {
        document.getElementById("incomeAlert").innerText = "invalid input";
    }
})

// handle save button event
document.getElementById("save-button").addEventListener("click", function () {
    const save = document.getElementById("save");
    const newSaveText = save.value;

    // check for valid save
    if (parseInt(newSaveText) >= 0) {
        document.getElementById("saveAlert").innerText = "";
        document.getElementById("savingAmount").innerText = "";
        document.getElementById("remainingBalance").innerText = "";

        const newSave = parseInt(newSaveText);
        const givenIncomeText = document.getElementById("inputIncome").value;
        const givenIncome = parseFloat(givenIncomeText);
        const savingAmount = givenIncome * (newSave / 100);

        // check for valid saving amount
        if (savingAmount >= 0 && savingAmount <= givenIncome) {
            document.getElementById("savingAlert").innerText = "";

            document.getElementById("savingAmount").innerText = savingAmount;

            const balanceText = document.getElementById("balance").innerText;
            const newBalance = parseFloat(balanceText);
            const remainingBalance = newBalance - savingAmount;

            // check for valid remaining balance
            if (remainingBalance >= 0) {
                document.getElementById("remainingBalanceAlert").innerText = "";
                document.getElementById("remainingBalance").innerText = remainingBalance;
            }
            else {
                document.getElementById("remainingBalanceAlert").innerText = "Remaining balance is less than saving amount";
            }
        }
        else {
            document.getElementById("savingAlert").innerText = "invalid calculation";
        }
    }
    else {
        document.getElementById("saveAlert").innerText = "invalid input";
    }
})