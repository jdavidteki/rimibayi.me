export function GetComments(score) {
  if(score <= 5){
    return "you are just embarrrrassing yourself!"
  }

  if(score >= 5 && score < 10){
    return "you are a failure, you will never make it!"
  }

  if(score >= 10 && score < 15){
    return "see, you will end up in mcdonalds!"
  }

  if(score >= 15 && score < 20){
    return "you are doing wehhll"
  }

  if(score >= 20 && score < 25){
    return "fantabulous"
  }

  if(score >= 25 && score < 30){
    return "you have too much pride, try to be calming down"
  }

  if(score >= 30 && score < 35){
    return "nice, we love to see it!"
  }

  return "nice, we love to see it!"
}

export function CleanLine(string){
    if (string != undefined){
        return string.substr(10).toLowerCase().replace("by rentanadvisercom", '***').replace("ing soon", 'no dey do like bolo')
    }
    return ""
}

export function ShuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

import meme1 from "../../../static/img/embarrassingyourself.png";
import meme2 from "../../../static/img/youareafailure.png";
import meme3 from "../../../static/img/youwillendupinmcdonalds.png";
import meme4 from "../../../static/img/youaredoingwell.png";
import meme5 from "../../../static/img/fantabulous.png";
import meme6 from "../../../static/img/toomuchpride.png";
import meme7 from "../../../static/img/welovetoseeit.png";

export function GetMemesFromComments(comment) {
  switch(comment) {
    case "you are just embarrrrassing yourself!":
      return meme1
    case "you are a failure, you will never make it!":
      return meme2
    case "see, you will end up in mcdonalds!":
      return meme3
    case "you are doing wehhll":
      return meme4
    case "fantabulous":
      return meme5
    case "you have too much pride, try to be calming down":
      return meme6
    case "nice, we love to see it!":
      return meme7
    default:
      return meme7
  }
}

export function HmsToSecondsOnly(str) {
  var p = str.split(':'),
      s = 0, m = 1;

  while (p.length > 0) {
      s += m * parseInt(p.pop(), 10);
      m *= 60;
  }

  return s*1000;
}


export function GetRandomBackground(selectedCountry){
  let randomNumber =  Math.floor(Math.random() * (11 - 1 + 1) + 1)
  let backgroundToReturn = ""
  let bckImageNum = ""

  switch(randomNumber) {
    case 1:
      bckImageNum = 1
      backgroundToReturn = "https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck1bck.jpeg?alt=media"
      break
    case 2:
      bckImageNum = 2
      backgroundToReturn =  "https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck2bck.jpeg?alt=media"
      break
    case 3:
      bckImageNum = 3
      backgroundToReturn =  "https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck3bck.jpeg?alt=media"
      break
    case 4:
      bckImageNum = 4
      backgroundToReturn =  "https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck4bck.jpeg?alt=media"
      break
    case 5:
      bckImageNum = 5
      backgroundToReturn =  "https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck5bck.jpeg?alt=media"
      break
    case 6:
      bckImageNum = 6
      backgroundToReturn =  "https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck6bck.jpeg?alt=media"
      break
    case 7:
      bckImageNum = 7
      backgroundToReturn =  "https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck7bck.jpeg?alt=media"
      break
    case 8:
      bckImageNum = 8
      backgroundToReturn =  "https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck8bck.jpeg?alt=media"
      break
    case  9:
      bckImageNum = 9
      backgroundToReturn =  "https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck9bck.jpeg?alt=media"
      break
    case 10:
      bckImageNum = 10
      backgroundToReturn =  "https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck10bck.jpeg?alt=media"
      break
    default:
      bckImageNum = 11
      backgroundToReturn =  "https://firebasestorage.googleapis.com/v0/b/rimibayi-4b634.appspot.com/o/searchBackgrounds%2Fbck11bck.jpeg?alt=media"
      break
  }

  if( selectedCountry != ""){
    if (this.state.countryToBackgroundImage[selectedCountry].bckUrl != undefined &&
        this.state.countryToBackgroundImage[selectedCountry].bckUrl != ""){
      backgroundToReturn =  this.state.countryToBackgroundImage[selectedCountry].bckUrl
    }
  }

  return backgroundToReturn
}

export function GetParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


export function GetCodeFromCountryName(value) {
  let val = Object.keys(CodeToCountries).find(key => CodeToCountries[key] === value)
  if (val == undefined){
    return ""
  }
  return val
}

export const CodeToCountries = {
  "AF": "Afghanistan",
  "AL": "Albania",
  "DZ": "Algeria",
  "AS": "American Samoa",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguilla",
  "AG": "Antigua and Barbuda",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaijan",
  "BS": "Bahamas",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia, Plurinational State of",
  "BA": "Bosnia and Herzegovina",
  "BW": "Botswana",
  "BR": "Brazil",
  "IO": "British Indian Ocean Territory",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CA": "Canada",
  "CV": "Cape Verde",
  "KY": "Cayman Islands",
  "CF": "Central African Republic",
  "TD": "Chad",
  "CL": "Chile",
  "CN": "China",
  "CO": "Colombia",
  "KM": "Comoros",
  "CG": "Congo",
  "CD": "Democratic Republic of the Congo",
  "CK": "Cook Islands",
  "CR": "Costa Rica",
  "CI": "Côte d'Ivoire",
  "HR": "Croatia",
  "CU": "Cuba",
  "CW": "Curaçao",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DK": "Denmark",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "ET": "Ethiopia",
  "FK": "Falkland Islands (Malvinas)",
  "FO": "Faroe Islands",
  "FJ": "Fiji",
  "FI": "Finland",
  "FR": "France",
  "PF": "French Polynesia",
  "GA": "Gabon",
  "GM": "Gambia",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GR": "Greece",
  "GL": "Greenland",
  "GD": "Grenada",
  "GU": "Guam",
  "GT": "Guatemala",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "HT": "Haiti",
  "HN": "Honduras",
  "HK": "Hong Kong",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "ID": "Indonesia",
  "IR": "Iran, Islamic Republic of",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IM": "Isle of Man",
  "IL": "Israel",
  "IT": "Italy",
  "JM": "Jamaica",
  "JP": "Japan",
  "JE": "Jersey",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "KI": "Kiribati",
  "KP": "North Korea",
  "KR": "South Korea",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao People's Democratic Republic",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MO": "Macao",
  "MK": "Republic of Macedonia",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MY": "Malaysia",
  "MV": "Maldives",
  "ML": "Mali",
  "MT": "Malta",
  "MH": "Marshall Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MU": "Mauritius",
  "MX": "Mexico",
  "FM": "Micronesia, Federated States of",
  "MD": "Republic of Moldova",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands",
  "NZ": "New Zealand",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "NU": "Niue",
  "NF": "Norfolk Island",
  "MP": "Northern Mariana Islands",
  "NO": "Norway",
  "OM": "Oman",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestinian Territory",
  "PA": "Panama",
  "PG": "Papua New Guinea",
  "PY": "Paraguay",
  "PE": "Peru",
  "PH": "Philippines",
  "PN": "Pitcairn",
  "PL": "Poland",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "QA": "Qatar",
  "RO": "Romania",
  "RU": "Russian",
  "RW": "Rwanda",
  "KN": "Saint Kitts and Nevis",
  "LC": "Saint Lucia",
  "WS": "Samoa",
  "SM": "San Marino",
  "ST": "Sao Tome and Principe",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "SC": "Seychelles",
  "SL": "Sierra Leone",
  "SG": "Singapore",
  "SX": "Sint Maarten",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SB": "Solomon Islands",
  "SO": "Somalia",
  "ZA": "South Africa",
  "SS": "South Sudan",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "SD": "Sudan",
  "SR": "Suriname",
  "SZ": "Swaziland",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syria",
  "TW": "Taiwan",
  "TJ": "Tajikistan",
  "TZ": "Tanzania",
  "TH": "Thailand",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad and Tobago",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "TC": "Turks and Caicos Islands",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates",
  "GB": "United Kingdom",
  "US": "United States",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VU": "Vanuatu",
  "VE": "Venezuela, Bolivarian Republic of",
  "VN": "Viet Nam",
  "VI": "Virgin Islands",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe",
};

export function GetUniqueListBy(arr, key) {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}
