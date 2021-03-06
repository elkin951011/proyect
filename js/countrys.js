const allCountrys = ['Kazakhstan', 'Argentina', 'Italy'];
//const allCountrys = ['Kazakhstan'];

const southAmericaCountrys = [
	'Argentina',
	'Bolivia',
	'Brazil',
	'Chile',
	'Colombia',
	'Ecuador',
	'Guyana',
	'Paraguay',
	'Peru',
	'Suriname',
	'Uruguay',
	'Venezuela'
];

const northAmericaCountrys = [
	'Antigua and Barbuda',
	'Bahamas',
	'Barbados',
	'Belize',
	'Canada',
	'Costa Rica',
	'Cuba',
	'Dominica',
	'Dominican Republic',
	'El Salvador',
	'Grenada',
	'Guatemala',
	'Haiti',
	'Honduras',
	'Jamaica',
	'Mexico',
	'Nicaragua',
	'Panama',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Vincent and the Grenadines',
	'Trinidad and Tobago',
	'United States of America'
];

const africaCountrys = [
	'Algeria',
	'Angola',
	'Benin',
	'Botswana',
	'Burkina Faso',
	'Burundi',
	'Cabo Verde',
	'Cameroon',
	'Central African Republic',
	'Chad',
	'Comoros',
	'Democratic Republic of the Congo',
	'Republic of the Congo',
	'Djibouti',
	'Equatorial Guinea',
	'Eritrea',
	'Ethiopia',
	'Gabon',
	'Gambia',
	'Ghana',
	'Guinea',
	'Guinea Bissau',
	'Kenya',
	'Lesotho',
	'Liberia',
	'Libya',
	'Madagascar',
	'Malawi',
	'Mali',
	'Mauritania',
	'Mauritius',
	'Morocco',
	'Mozambique',
	'Namibia',
	'Niger',
	'Nigeria',
	'Rwanda',
	'Sao Tome and Principe',
	'Senegal',
	'Seychelles',
	'Sierra Leone',
	'Somalia',
	'South Africa',
	'South Sudan',
	'Sudan',
	'Swaziland',
	'Tanzania',
	'Togo',
	'Tunisia',
	'Uganda',
	'Zambia',
	'Zimbabwe'
];

const europeCountrys = [
	'Albania',
	'Andorra',
	'Armenia',
	'Austria',
	'Azerbaijan',
	'Belarus',
	'Belgium',
	'Bosnia and Herzegovina',
	'Bulgaria',
	'Croatia',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Estonia',
	'Finland',
	'France',
	'Georgia',
	'Germany',
	'Greece',
	'Iceland',
	'Ireland',
	'Italy',
	'Kazakhstan',
	'Kosovo',
	'Latvia',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macedonia',
	'Malta',
	'Moldova',
	'Monaco',
	'Montenegro',
	'Netherlands',
	'Norway',
	'Poland',
	'Portugal',
	'Romania',
	'Russia',
	'San Marino',
	'Serbia',
	'Slovakia',
	'Slovenia',
	'Spain',
	'Sweden',
	'Switzerland',
	'Ukraine',
	'United Kingdom',
	'Vatican City'
];

const asiaCountrys = [
	'Armenia',
	'Azerbaijan',
	'Bangladesh',
	'Bhutan',
	'Brunei',
	'Cambodia',
	'China',
	'Georgia',
	'India',
	'Indonesia',
	'Japan',
	'Kazakhstan',
	'Kyrgyzstan',
	'Laos',
	'Malaysia',
	'Maldives',
	'Mongolia',
	'Myanmar',
	'Nepal',
	'North Korea',
	'Pakistan',
	'Philippines',
	'Russia',
	'Singapore',
	'South Korea',
	'Sri Lanka',
	'Taiwan',
	'Tajikistan',
	'Thailand',
	'Timor Leste',
	'Turkmenistan',
	'Uzbekistan',
	'Vietnam'
]

const middleEastCountrys = [
	'Bahrain',
	'Cyprus',
	'Egypt',
	'Iran',
	'Iraq',
	'Israel',
	'Jordan',
	'Kuwait',
	'Lebanon',
	'Oman',
	'Palestine',
	'Qatar',
	'Saudi Arabia',
	'Syria',
	'Turkey',
	'United Arab Emirates',
	'Yemen'
];

const oceanPacificCountrys = [
	'Australia',
	'Federated Islands of Micronesia',
	'Fiji',
	'French Polynesia',
	'Guam',
	'Kiribati',
	'Marshall Islands',
	'Nauru',
	'New Zealand',
	'Paulau',
	'Papua New Guinea',
	'Samoa',
	'Solomon Islands',
	'Tonga',
	'Tuvala',
	'Vanuata'
];

function addContinents(){
	addContinent(southAmericaCountrys);
	addContinent(northAmericaCountrys);
	addContinent(africaCountrys);
	addContinent(europeCountrys);
	addContinent(asiaCountrys);
	addContinent(middleEastCountrys);
	addContinent(oceanPacificCountrys);
	allCountrys.sort();
}

function addContinent(continent){
	for (let i = 0 ; i < continent.length ; i++){
		// allCountrys.push(continent[i]);
	}
}