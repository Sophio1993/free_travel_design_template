// export const destinations = [
//     { img: "https://cdn.shopify.com/s/files/1/2101/3083/products/79152.jpg?v=1558640798", title: "Big Sur", description: "California, USA" },
//     { img: "https://thumbs.dreamstime.com/b/monument-valley-rocks-arizona-desert-aerial-view-monument-valley-rocks-arizona-desert-aerial-view-112244352.jpg", title: "Prescott", description: "Arizona, USA" },
//     { img: "https://cdn.thecrazytourist.com/wp-content/uploads/2020/02/ccimage-shutterstock_207582814.jpg", title: "Fort Mayers", description: "Florida, USA" },
//     { img: "https://fullsuitcase.com/wp-content/uploads/2021/05/Best-places-to-visit-in-Arizona-USA.jpg", title: "Tucson", description: "Arizona, USA" },
//     { img: "https://www.travellens.co/content/images/2021/10/-St-Joseph-MI.jpg", title: "St. Joseph", description: "Michigan, USA" },
//     { img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/6a/f5/4c/caption.jpg?w=500&h=300&s=1", title: "Madrid", description: "Spain" },
// ];



export const body = [
    {
        title: 'Popular Destinations',
        className_C: "main-container",
        className: "popular-destinations",
        className_I: "popular-destinations-item",
        block: [
            { img: "https://cdn.shopify.com/s/files/1/2101/3083/products/79152.jpg?v=1558640798", location: "Big Sur", place: "California, USA" },
            { img: "https://thumbs.dreamstime.com/b/monument-valley-rocks-arizona-desert-aerial-view-monument-valley-rocks-arizona-desert-aerial-view-112244352.jpg", location: "Prescott", place: "Arizona, USA" },
            { img: "https://cdn.thecrazytourist.com/wp-content/uploads/2020/02/ccimage-shutterstock_207582814.jpg", location: "Fort Mayers", place: "Florida, USA" },
            { img: "https://fullsuitcase.com/wp-content/uploads/2021/05/Best-places-to-visit-in-Arizona-USA.jpg", location: "Tucson", place: "Arizona, USA" },
            { img: "https://www.travellens.co/content/images/2021/10/-St-Joseph-MI.jpg", location: "St. Joseph", place: "Michigan, USA" },
            { img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/6a/f5/4c/caption.jpg?w=500&h=300&s=1", location: "Madrid", place: "Spain" },
        ]
    },
    {
        title: "Hotels and Restaurants",
        className_C: "main-container",
        className: "hotels-and-restaurants",
        className_I: "hotels-and-restaurants-item",
        className_F: "hotels-and-restaurants-item-footer",
        className_L: "hotels-and-restaurants-item-footer-location",
        className_TB: "title-button",
        icon_view_all: <i class="fa-sharp fa-solid fa-arrow-right"></i>,
        view_all: "View all",
        icon: <i class="fa-solid fa-location-dot"></i>,
        dark_star: <i class="fa-solid fa-star"></i>,
        light_star: <i class="fa-regular fa-star"></i>,
        block: [
            { img: "https://cdn.shopify.com/s/files/1/2101/3083/products/79152.jpg?v=1558640798", location: "Monastero Santa Rosa Hotel & Spa", place: "Salerno, Italy", rate: 5, },
            { img: "https://thumbs.dreamstime.com/b/monument-valley-rocks-arizona-desert-aerial-view-monument-valley-rocks-arizona-desert-aerial-view-112244352.jpg", location: "Prescott", place: "Lake Como, Italy", rate: 3, },
            { img: "https://cdn.thecrazytourist.com/wp-content/uploads/2020/02/ccimage-shutterstock_207582814.jpg", location: "Fort Mayers", place: "Udaipur, India", rate: 4, },
            { img: "https://fullsuitcase.com/wp-content/uploads/2021/05/Best-places-to-visit-in-Arizona-USA.jpg", location: "Tucson", place: "Los Angeles, United States", rate: 3, },
        ]
    },
    {
        title: "Travel Tips and Advice",
        className_C: "main-container",
        className: "travel-tips-and-advice",
        className_I: "travel-tips-and-advice-item",
        className_IF: "travel-tips-and-advice-item-footer",
        className_TB: "title-button",
        icon_view_all: <i class="fa-sharp fa-solid fa-arrow-right"></i>,
        view_all: "View all",
        calendar_icon: <i class="fa-solid fa-calendar-day"></i>,
        user_icon: <i class="fa-solid fa-user"></i>,
        review_icon: <i class="fa-solid fa-comment"></i>,
        block: [
            { img: "https://cdn.shopify.com/s/files/1/2101/3083/products/79152.jpg?v=1558640798", location: "East Village Ice Cream Crawl", description: "We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every", date: "today", author: "Maria Philips", review: 2 },
            { img: "https://thumbs.dreamstime.com/b/monument-valley-rocks-arizona-desert-aerial-view-monument-valley-rocks-arizona-desert-aerial-view-112244352.jpg", location: "Brooklyn Bridge cinematic photo walk", description: "This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I'm always open to capture clients at different locations upon request for an additional charge. ", date: "today", author: "James Calzoni", review: 17 },
        ]
    },
    {
        title: "Activities",
        className_C: "main-container",
        className: "activities",
        className_I: "activities-item",
        className_TB: "title-button",
        icon_view_all: <i class="fa-sharp fa-solid fa-arrow-right"></i>,
        view_all: "View all",
        block: [
            { img: "https://cdn.shopify.com/s/files/1/2101/3083/products/79152.jpg?v=1558640798", activity: "Sailing" },
            { img: "https://thumbs.dreamstime.com/b/monument-valley-rocks-arizona-desert-aerial-view-monument-valley-rocks-arizona-desert-aerial-view-112244352.jpg", activity: "Climbing" },
            { img: "https://cdn.thecrazytourist.com/wp-content/uploads/2020/02/ccimage-shutterstock_207582814.jpg", activity: "Skiing" },
            { img: "https://fullsuitcase.com/wp-content/uploads/2021/05/Best-places-to-visit-in-Arizona-USA.jpg", activity: "Hiking" },
        ]
    },
    {
        title_about_us: "About Us",
        className_C: "main-container",
        className: "about-us",
        className_I: "about-us-item",
        className_BW: "about-us-item-between",
        className_Btn: "body-button",
        icon_read_more: <i class="fa-sharp fa-solid fa-arrow-right"></i>,
        read_more: "Read more",
        block: [
            { img: "https://cdn.shopify.com/s/files/1/2101/3083/products/79152.jpg?v=1558640798", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
        ]
    }

];