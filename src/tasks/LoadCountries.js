import data from "../data/countries.json";
import papa from "papaparse";
import legendItems from "../entities/LegendItems";
import LegendItem from "../entities/LegendItem";
class LoadCountries {
  covidDataUrl ="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";
  //by using papa parse whe can convert any raw data into json
  setState = null;
  
//   mapCountries = features;

  
  load = (setState) => {
    this.setState = setState;
    // this.mapCountries=features;
    papa.parse(this.covidDataUrl, {
      download: true,
      header: true,
      complete: (result) => this.#processCovidData(result.data),
    });
    // setState(features);
  };
  #processCovidData = (covidCountries) => {
    //  console.log("cc",covidCountries);
     
    for (let i = 0; i < data.features.length; i++) {
      const country = data.features[i];
    //   console.log("map", country);
      const covidCountry = covidCountries.find(
        (covidCountry) => covidCountry.ISO3 === country.properties.ISO_A3
      );
      
      country.properties.confirmed = 0;
      country.properties.confirmedText = "0";
    //  console.log("covidCountry",covidCountry);

      if (covidCountry != null) {
        const confirmed = Number(covidCountry.Confirmed);
        // console.log("number",confirmed)
        country.properties.confirmed = confirmed;
        country.properties.confirmedText = this.#formatNumberWithCommas(confirmed); 
      }
      this.#setCountryCode(country);
    }
    this.setState(data.features);
  };
  #setCountryCode=(country)=>{
    const legendItem = legendItems.find((legendItem)=>legendItem.isFor(country.properties.confirmed));
    if(legendItem !=null){
       country.properties.color = legendItem.color; 
    }
  }
  #formatNumberWithCommas=(number)=>{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export default LoadCountries;
