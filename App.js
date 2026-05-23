import React from "react";
import ReactDOM from "react-dom/client";

const resList = [
{
    id: "1030771",
    name: "Thalaiva Biryani",
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2026/5/14/ee77c307-6835-40a1-b039-c79d3427e8ad_749b066a-61e1-45ae-bde6-19ce48a2de39.jpeg",
    locality: "Shoppers Orbit",
    areaName: "Lohegaon",
    costForTwo: "₹400 for two",
    cuisines: [
    "Biryani",
    "Mughlai",
    "Lucknowi",
    "Hyderabadi",
    "Kebabs",
    "Desserts",
    "Beverages"
    ],
    avgRating: 3.9,
    parentId: "582792",
    avgRatingString: "3.9",
    totalRatingsString: "267",
    sla: {
    deliveryTime: 26,
    lastMileTravel: 2.1,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "2.1 km",
    iconType: "ICON_TYPE_EMPTY"
    }
},
{
     "id": "3409",
              "name": "Marrakesh",
              "cloudinaryImageId": "3f2a16a67dbaabe7841b5fbf5930f72c",
              "locality": "Viman Nagar",
              "areaName": "Kalyani Nagar",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "shawarma",
                "Rolls & Wraps",
                "North Indian",
                "Biryani",
                "Lebanese",
                "Middle Eastern",
                "Mediterranean",
                "Kebabs",
                "Beverages",
                "Desserts"
              ],
              "avgRating": 4.2,
              "parentId": "624",
              "avgRatingString": "4.2",
              "totalRatingsString": "47K+",
              "promoted": true,
              "adTrackingId": "cid=0173fcf5-89f6-4704-b140-519ee6e10fc3~p=2~adgrpid=0173fcf5-89f6-4704-b140-519ee6e10fc3#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3409~plpr=COLLECTION~eid=f85b8c18-1b5a-47db-bc1c-35d769d4c436~srvts=1779537150090~collid=83639",
              "sla": {
                "deliveryTime": 48,
                "lastMileTravel": 6.8,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "6.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              }
}
];

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAA9lBMVEVDQkJDQUL+/v7/nQQ8OjtAPj82NDU6ODkzMTI2MzX/nwBEQUFDQUMwLi//oQAzMDLm5eaAfn+amJlraWp9e3xjYWJIRkdcWltWVFU9PkM1O0NDQT+KiInq6ur9nA34+PjGxsbT0tOtra1xb3Df398lIiM7PUWSkJGsq6xXVVbY1tfCwsLbjR9EPkRJQjy6fCbokxWvdycmLjcwO0BaTDmCXjJnUTfXjB6hcCrLhiOcai71nBFWSziRZjFvVDTjlR/JhihVRjy7eSleTzWSZi1HQjmIYTP5rDsnNkb3s0dvVy9nUToiNUZwVDYmOEA9O0mecSMXFBXOOpR0AAAN8UlEQVR4nO2aCXfiOBLH7SBhY4vLBh8CjIFwhCPAAAFCOsdMOjvb2Z7e/f5fZkuHCSSZTnbfhCRv9Ht0xxaybP0plaoka5pCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoPgf63wOl1es5qFa2/ZZdeXMOqpVuayQMQ83+nJZ4UK3sTjhfLO5DMvqUBnZArWybni2X09V4PZ+9bafeiMNppY1m55vFrEPpxXARkk9oWYfTyqZfNjch0XXSQcNLdvDZOJxW4TwChUCiiq3dXH1G9344rWbra0psYo9AMDpdhW/csTfgYFqRm9yc6RPeLCojcjNRWv054fmQgj8np9dnIdE6k5vP57AOphW9nlKI28Pzi9DWKrPNXGilEV2rEFLRdO3Dz4wH0opodHjH5r7wV1rRK+FvEzEREtuu2GREQC37w4cRh9QKj8C81hcdMhsNb0OhjBZ26NeLmwrtkEpS+aOmjYfSCkQ6n4EG4eXk2/zL1S0lLDscjWZnv06iKNosv6BQ08G+bCiFnBH+fjiHdiCtwKCm18y3V8L5dHp7GjIrIgTPlznLSqVS8N/mHIca+C59NFucL07pxxuSB9Mq/L5BzFhsttIQjsCn2xpdbFJRlGLAn9zkjv4glfB0yZQbjz5ctHowrXQ6Wf3QK+DNQST4p9vhbGpZUS6VkmJFUe7qrkJPJxYIF+XO/r5jUA8XubNQGguoRWbzYU4a1RYrt1lOUv/YwOH497/vGNQhsbHOqDy2KTrPgf080ioVMQP7J/vfuv1wkf3htNJArNz4hs5CSunX80luuOJaReDbc6mclRLKyaLImtA37vr/zOG0Aui3YTQcr1bjYbQZX/5xysdgFFnry/livLG4WXEmy/X68m9sVwAJO/PbX9fr8e09pqGNhhYXa/wDZkaK79Ybblgp63zWoZ2Pt8J1UK1g9ht1ZrRDQ4jabdI5tyaTVLRBzNlXSEjRFbh3mANPNfIRM57DarUP/p6LFpvIuhejzbYphPBj0GpMNf3jSfUeWm1VIPe53OVllJpgwgs7Cyu1+NcKbOt7p/KTBt6Lw2uFEXdEkO6Fd1buhkLscD1ja8s6XeamlNCVFU2wVmE1DmNdhP1Ur/COb6gVRo/ArDBdLnraqANxA/1jmLv+YwbSbDDTilxYV7ORFv5+F+Wuf/+BSSVZcJAtGRyE8eM77d5g/97igj95HiTLjYyZz+fTBno3rbBXLe5R9TEUDhyP4svb8Xq5XlrR2c01RFK3YQVUAQv7/mN2cTsdg9u6vj0LO0TjloXL1WIJru92u47TLbq6ua+W0RJ3qpaTcuwmV8AFVdcwdNHK/vNU+Y+XP+k240Zj0HRK3rtp5R49oorwScP/ZT7e5Cy2usDi9o01/o5Clh5W6HA9W11BgsjKocJkKhcbDGe/nXrsmns/SvLFcVYWpZt7F9SqefKkFQAkREHj4bz7c8s6pFYthHqhMQYdHlIbK1reMEeukdHp5t8TvkCz/W5zR5/TCujtiGU+CBNIw8r0HtfPP9NKPa9jv75T4BgfRqsyKgcXVyLefFhdSEWXHb7s8M3aTw/ZwsOKrQ8+o9XRILu9j/dQ6mSetSt2b/y0lVpWzxT2FE2/k1ao9fjZfOydTkTaZ+UiCKxSIgnc8M0wuma5IETtOWuz4fbFxLqlumY8thJGKxkvO2Z1VDD/TKuB+bSVWhYVk+M6s6/Be2mFg5KgJSl6FboWGljLxdfK18u1JYxsyHbBznNCnsntxWnlbMrzHTifYw0Hrlsul/2Tk6BcGsjOJb4JB6LfLX4vDJMkfKRWPc8LpBo1k7XiuuJRWNVisWSgoFzmhWUMj9t8R61co1w23DJyy9j12Se85FKlotVsBPKE9Ja7pyi3CDV7ww+ttREUT+yQ/rYRiw7X1Maui2QzZSObmIKc9LJCPCfLa+itsgcdz4jCagbjrJCtnsYnrgcf39V9F54NjvVySy+7mBd6GKP0C0HDG2rlOqjbRU4XO1XdKXpOEdGh0GP1B4tFiV35fcoXF6IlhdyQGZI1pK0uxuCkOmcWNzMrJBiaYS1BM1WUiHPU444Yl4UUGMsbVeFGOC/qFNF2iNZN3HL8lhOUHK/oePwggIOqQ0r8+EnQdkitdN3zCPGI7umap3kBxOtfxQS4CeWGl05OuTu3NhAw8KPcZVjlGlQIhfCLBRbfR9gLToLgxDN0Fj4mfjDOQzU7K6b8XgZ7HAhIoVI+lj4NAlcx0fVN7Lstd/djgClhNi7LbtlPv6tWj+edKgrvcqz3qTHdpi50KRb4bqRok5mMB/kqBC8675ii57Fw3FgT7fWZw0qEg3xgIH04q2MKBV2vmhXXHnUNs3G0D9Pa6MqTGL0Utb+pVo/mnRKiKx4sWHcPF9AxDw9y8zkPGKw1TZJmGy+4VrnzUPZyICc5VH9w7tljYVZtMytClDq3ymyfn/h+s91PimXZlhqfHMzkFy2c/Dy4elOt0o+0aiEK3okJ8u1hFYGOhXef3wutxlTmsJBZC62sFc2LXspZKomnGtBXQzr6Rgwk5vsgYUB8eeSipGyLnEiz1e0D/nwWfEutMs39Z3MxW0FgvYdZb6vVko/K6PRMajXbvnab1P7SMUUvm1IrGeMyM8vWjh7T4OYmyr2g2mbX1lywmWxhv2ISdKRbSejuvts8aCbzVa/nOE6vGeDwVvR+SgnP82ybfI24pU3ojTi4SrabCZkt+YjNzYnsuYyqE3uFhGTrbXbxwEtnRPc9v9fuF+JqholgilYKzWaPs03+jEAqXn+6gnEorcSgqLfTbGEkAxNNeJ/jjnwCA40tLBC2VsUFuaZoInS8D9k2Pbh2fC9ihg0lspciW8PyDLIA3agfPYVVk1/o5ATjtClESYuyQTsND5Q2doIppMvh2XuvfFDO5vXsQxEV8WZuRfVRhb1te5bj4RVECuC4eDwxxOy1D52E2oSHXuDBkp53+cpKEl4VIJmTfrlWEGy/0HFiJzuGIsqSkSxVEoIh6QL7O896WK3Ej1Xb1WoqU5zxKVvro18ikUVf0YCcMa0gohre86/OJjJ/nnuVkehJMWuaGV+6cFAuCZ1qUMxoy68gXxF9r+/6H5kLsSnTzMMH/mFULRl5sDJTanX8XlqZhSdakQp7f4hpsllPV+OrXErsnt6nq2g2FtvQVjScrqZLsTYDIX7gJxPfcaNxvPXlx6aeb8pBJy0FlaTlZPCJ0Gp3SMkA/+h4AMQxa8tPO0e1uNft9mSz75YPSv9a2NHKDucbYUlRSqxUiXiLul2DhEuxJsOW+ayk0viXHsb+U6dUD3BiKPVMMtBMccd6GslYK7PzOE+XPY4Co7hfUH4n3471p3Zta+F8Ym0XruRi34J6MXHtEMtlh0gu28Df6S9Fx3imlzV/Jy/cGkMy8xbTwsLqu6unRvVJKxjtL7ENdusfVKvgGa10PaxMI2lRTBErWt/QIPYdCBVI58vE4u8TiZeyrKtvv7RgWKAnvWxipG/7qW+NIVmNarRFLFHP72r1dFkU7Vts891iUezy6akW7/9YROt8PV9umNVY1ma4uqCh24Pcn3c4xIv1hAkI+fVkfEk71aaBddStFY75RAd/+41m1WOjLh2L9psPAw3rNVGmd9nf2vFu541eMl1KascG9uKCDDvqAzevv8CbaQXZbDqTgVjm0f1GbDO+cnF5+e1sXpl1iG4HesC3pezKiHRo+PXscnH5G0yUIfbdtGgJ2uGfTMY003IPC/GyvTUnXhGQ996/NaufEQ0JDBaspXFQbpVaJ8h8z9xZ8HiLUm758RchCSH8DT8di1oQWNm6RsR3vPzFhRLt/3hBZP8SiMHwM1uOz97sjbX6a8C7+6ScJwXPIivti8GOX6XNYz6FVmnfqXp7Y8QrlVr4xVGD2PatWPl3t9piuBK7/89jfAatMk6j6hy70Fkt2W73C07zmIdD0nJ2Dni3+HG6yS6C+bHvNPuerI2cKjIG3la61z/HJ9AKu/02yngFQ8eGJ/qG/bht+n0TxlPAXLQRIMQOEPFg4tQNj1kh0rHUqtrLZosxRB+eZ0DwUEVslx/zbNEIuM7Ywxi/5LU+gVZGk63fZRtldNLo9YUx+RCKZI8RLg+akNK04l7DGTTTqNUYNCAdbPQaRYThRNRGEHroRsFEpUGzazCt0gOwOd+IDaPXHLg4PehVszHx3i3H+eu06rEVhmw/QOVBu9gT73FwrQwTsrmCh4q9/zTK7UbabOjt2MWk0fYHcILb8VYrjI9N89jpHnOtzAbI3Kw66aDQ7cWZfN9DqOv0Su/1PsNfBg4KOJ8tNkywouxWq3a2C3rEbuCCP3LacZAFrfq4PShDhJl9pFWvnW32DLMfnLjYcIoo3YBhOGgY+KThnZRxHk71dCPO/PxBPoFWkPb2B3EM7qTczBYd9ttjvxY3BhAJuLEzMECrbByYsYFK/SYMO29g+jAgi41m3xe+vRA3eiZoNug1Da5VDElSCWTPNHuDKsrEbCNxUH1hd+IzaAXBlB+k5TT2MO+xEuT53M5kzIS8wNhWkyfiHLFDI/ANjeVZvBXuyg0/QLyClu6/tJHzKbTSfzJF7X+xW488vWi/hOwW4eILbxR9Fq0OwcuhrdLq9SitXo/S6vUorV6P0ur1KK1ej9Lq9SitXo/S6vUorV6P0ur1KK1ez1+ilUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCjegv8CX7uGxtRn+ogAAAAASUVORK5CYII=" alt="logo"/>
            </div> 
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>  

        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style= {{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryImageId}/>
            <h3>{resData.name}</h3>
            <h5>{resData.cuisines.join(", ")}</h5>
            <h6>{resData.avgRating} stars</h6>
            <h6>{resData.sla.deliveryTime} minutes</h6>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search"/>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData = {resList[1]}/> */}
                {
                    resList.map((restaurant)=>(
                        <RestaurantCard key={restaurant.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);