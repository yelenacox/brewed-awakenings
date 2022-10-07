import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const orders = getOrders()
const employees = getEmployees()

// //click event that displays the number of products the employee has sold

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")){
            const[,empPrimaryKey] = itemClicked.id.split("--")
            for (const employee of employees){
                if (employee.id === parseInt(empPrimaryKey)){
                    const totalSold = employeeOrders(employee)
                    window.alert(`${employee.name} sold ${totalSold} products`)
                }
            }
        }
    }
)


//function that accepts employee is parameter
const employeeOrders = (employee) => {
    //employee items sold  variable equal to 0
    let itemsSold = 0
    //iterate through orders
    for (const order of orders){
        if (order.employeeId === employee.id){
        //Check if the employeeId in orders is equal to employee.id
        itemsSold++
        //add to employee orders variable
        }
    }
    return itemsSold

}




export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

