// https://medium.com/hypersphere-codes/advanced-typescript-mapped-types-and-more-b5d023bd6539

const EnabledRegons = {
	"GB": {
		"en": true,
	},
	"IT": {
		"en": true,
		"it": true,
	},
	"PL": {
		"pl": true,
		"en": false,
	},
	"LU": {
		"fr": true,
		"de": true,
		"en": true,
	}
} as const;

const countryCodeToName = (countryCode: keyof typeof EnabledRegons): string => {
	switch (countryCode) {
		case "GB": return "Great Britain";
		case "IT": return "Italy";
		case "PL": return "Poland";
		case "LU": return "Luxembourg";
	}
};

const getUrl = <CountryCode extends keyof typeof EnabledRegons>(country: CountryCode, language: keyof typeof EnabledRegons[CountryCode]) => {
   
};
// error here
getUrl('IT', 'pl');
getUrl('GB', 'en');

type ValueOf<T> = T[keyof T]

type Region = keyof typeof EnabledRegons
// creating a locale type for example en-US
type Locale = ValueOf<{[K in Region]: `${keyof typeof EnabledRegons[K] & string}-${K}`}>


const operationOnLocale = (locale: Locale) => {
  switch(locale){
    case "de-LU": return "de.ouramazingwebsite.lu"
  }
}
// check out the template literal types
operationOnLocale('')
