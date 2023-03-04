// dom
const cardCountry = document.getElementById("cardCountry");
export const createCountry = (countries) => {
  cardCountry.innerHTML = "";
  countries.forEach((country) => {
    const commonName = country.name.common;
    const region = country.region;
    const population = country.population;
    const capital = country.capital ? country.capital[0] : "No Capital";
    const flags = country.flags.png;

    cardCountry.innerHTML += `
    <div
          class="cardsCountryBox hover:scale-105 duration-500 w-72 p-1  mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700"
        >
          <div class="bg-indigo-300 ... mb-4">
            <img src=${flags} class="object-cover h-48 w-96 ..."  />
          </div>
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cardTitle"
              id="cardTitle"
            >
              ${commonName}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Population:${population}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Region:${region}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Capital:${capital}
          </p>
          <a
            href="./about.html?country=name/${commonName}"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
    `;
  });
};

// about ui

const countryInfo = document.querySelector(".countryInfo");

export const createCountryInfo = (country) => {
  const {
    population,
    borders,
    capital,
    flags,
    name,
    region,
    tld,
    currencies,
    languages,
    subregion,
  } = country;

  const nativeName = Object.values(name.nativeName)[0].official;

  const currency = Object.values(currencies)[0].name;
  const language = Object.values(languages);
  countryInfo.innerHTML = `
        <div class="flex justify-center flex-wrap gap-20">
        <div class=" mb-4">
          <img src=${flags.png} class="object-cover h-48 w-96 ..." />
        </div>
        <div class="w-3/5 dark:text-slate-100">
          <h1 class="mb-5 font-bold text-3xl">${name.common}</h1>
          <ul class="flex justify-between flex-wrap mb-7 w-auto">
            <li class="country-list">
              <p >
                Native Name:
                <span class = "font-bold">${nativeName}</span>
              </p>
              <p>
                Population:
                <span class = "font-bold">${population}</span>
              </p>
              <p>
                Region:
                <span class = "font-bold">${region}</span>
              </p>
              <p>
                Sub Region:
                <span class = "font-bold">${subregion}</span>
              </p>
              <p>
                Capital:
                <span class = "font-bold">${capital}</span>
              </p>
            </li>
            <li class="country-item">
              <p>
                Top level Domain:
                <span class = "font-bold">${tld}</span>
              </p>
              <p>
                Currencies:
                <span class = "font-bold">${currency}</span>
              </p>
              <p>
                Languages
                <span class = "font-bold">${language}</span>
              </p>
            </li>
          </ul>
          <div class="country-border mb-5">
          <h1 class = "font-bold text-2xl">Border Country:</h1>
          ${
            borders
              ? borders.map((border) => {
                  return `
            <a class="p-3 text-blue-500" href = "./about.html?country=alpha/${border}">${border} </a>
            `;
                })
              : "No Borders"
          }
          </div>
        </div>
        </div>
`;
};
