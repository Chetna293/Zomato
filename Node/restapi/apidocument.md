// page 1
> List of city
>>(Get) http://localhost:9500/location (local) https://zomtoapi.herokuapp.com/location (live)
> List of restaurant
>>(Get) http://localhost:9500/restaurants (local) https://zomtoapi.herokuapp.com/restaurants (live)
> Restaurant on the basis of city
>>(Get) http://localhost:9500/restaurants?stateId=3 (local) https://zomtoapi.herokuapp.com/restaurants?stateId=3 (live)
> List of QuickSearch
>>(Get) http://localhost:9500/mealType (local) https://zomtoapi.herokuapp.com/mealtype (live)

//Page2
> List of restaurant on basis of meal
>>(Get) http://localhost:9500/restaurants?mealId=5 (local) https://zomtoapi.herokuapp.com/restaurants?mealId=5 (live)
> http://localhost:9500/restaurants?mealId=5&stateId=2 (local) https://zomtoapi.herokuapp.com/restaurants?mealId=5&stateId=2 (live)
> Filter on basis of cuisine
>>(Get) http://localhost:9500/filter/1?cuisineId=2 (local) https://zomtoapi.herokuapp.com/filter/1?cuisineId=2 (live)
> Filter on basis of cost
>>(>(Get) http://localhost:9500/filter/1?lcost=700&hcost=1200 (local) https://zomtoapi.herokuapp.com/filter/1?lcost=700&hcost=1200 (live)
> Sort on basis of cost
>>(Get) http://localhost:9500/filter/1?lcost=500&hcost=1200&sort=-1 (local) https://zomtoapi.herokuapp.com/filter/1?lcost=700&hcost=1200&sort=-1 (live)

//Page3
> Details of the restaurant
>>(Get) http://localhost:9500/details/5 (local) https://zomtoapi.herokuapp.com/details/5 (live)
> Menu of the restaurant
>>(Get) http://localhost:9500/menu/7 (local) https://zomtoapi.herokuapp.com/menu/7 (live)

//page4
> Menu details (selected item)
>>(Post) localhost:9500/menuItem (local) https://zomtoapi.herokuapp.com/menuItem (live)
[1,4,6]
> Place order
>>(Post) localhost:9500/placeOrder (local) https://zomtoapi.herokuapp.com/placeOrder (live)
(
    {
        "name":"Nikita",
        "email":"nikita@gmail.com",
        "address":"Hom 39",
        "phone":934645457,
        "cost":845,
        "menuItem":[10,13,17]
    }
)

//page5
> List of order placed 
>>(Get) http://localhost:9500/orders (local) https://zomtoapi.herokuapp.com/orders (live)
> List of order placed of particular user
>>(Get) http://localhost:9500/orders?email=amit@gmail.com
> Update order status
>>(Put) http://localhost:9500/updateOrder/2
(
    {
        "status":"TAX_FAIL",
        "bank_name":"AXIS",
        "date":"29/05/2023"
    }   
)



////////////////////////////////
> Delete orders
>>(Delete) localhost:9500/deleteOrder/628c485d93399d546c136d84