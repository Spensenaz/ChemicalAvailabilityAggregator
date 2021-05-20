import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  urls = [
    {
      name: "Sigma Aldrich",
      urlFirst: "https://www.sigmaaldrich.com/catalog/search?term=",
      urlLast: "&interface=CAS%20No.&N=0&mode=match%20partialmax&lang=en&region=US&focus=product"
    } ,
    {
      name: "Alfa Aesar",
      urlFirst: "https://www.alfa.com/en/search/?search-tab=product-search-container&type=SEARCH_CHOICE_CAS&q=",
      urlLast: ""
    },
    {
      name: "VWR",
      urlFirst: "https://us.vwr.com/store/product?keyword=",
      urlLast: ""
    }, 
    {
      name: "Fischer Scientific",
      urlFirst: "https://www.fishersci.com/us/en/catalog/search/products?keyword=",
      urlLast: ""
    },
    {
      name: "Thomas Scientific",
      urlFirst: "https://www.thomassci.com/search/go?w=",
      urlLast: "&AccountWelcomeMessage=Welcome%2c+How+May+We+Help+You%3f&CartItemCount=0&LoggedIn=0&ThomasDomain=www.thomassci.com"
    },
    {
      name: "ProteoChem",
      urlFirst: "http://www.proteochem.com/advanced_search_result.php?search_in_description=1&inc_subcat=1&keywords=",
      urlLast: "&categories_id=&x=0&y=0"
    },
    {
      name: "Grainger",
      urlFirst:"https://www.grainger.com/search?searchQuery=",
      urlLast: "&searchBar=true"
    },
    {
      name: "Spectrum Chemical",
      urlFirst: "https://www.spectrumchemical.com/search/go?w=",
      urlLast: ""
    },
    {
      name: "TCI Chemicals",
      urlFirst: "https://www.tcichemicals.com/US/en/search/?text=",
      urlLast: ""
    }
  ]

  constructor() { }

  getUrls(){
    let formattedUrl = []
    for (let i = 0; i < this.urls.length; i++) {
      formattedUrl[i] =  this.urls[i].urlFirst + "67-64-1" + this.urls[i].urlLast
    }
    return formattedUrl
  }
  getName(){
    let urlName = []
    for (let i = 0; i < this.urls.length; i++) {
      urlName[i] = this.urls[i].name
    }
    return urlName
  }

}
