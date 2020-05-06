const initialState = {
  Title: "Nuestros Precios",
  servicePackages: [
    {
      id: "0",
      namePackages: "BASIC",
      price: 100,
      priceHour: 50,
      Service: [
        {
          idService: "0",
          nameService: "Dj",
          count: 1
        },
        {
          idService: "1",
          nameService: "Fografia",
          count: 1
        },
        {
          idService: "2",
          nameService: "Animacion",
          count: 0
        }
      ],
      info: {
        text: "Más informacionn",
        url: "#"
      },
      button: {
        text: "Contratar",
        url: "#"
      }
    },
    {
      id: "1",
      namePackages: "PREMIUM",
      price: 200,
      priceHour: 50,
      Service: [
        {
          idService: "0",
          nameService: "Dj",
          count: 1
        },
        {
          idService: "1",
          nameService: "Fografia",
          count: 1
        },
        {
          idService: "2",
          nameService: "Animacion",
          count: 1
        },
        {
          idService: "3",
          nameService: "Fotocool",
          count: 1
        }
      ],
      info: {
        text: "Más informacion",
        url: "#"
      },
      button: {
        text: "Contratar",
        url: "#"
      }
    },
    {
      id: "2",
      namePackages: "ESTANDAR",
      price: 150,
      priceHour: 50,
      Service: [
        {
          idService: "0",
          nameService: "Dj",
          count: 1
        },
        {
          idService: "1",
          nameService: "Fografia",
          count: 1
        },
        {
          idService: "2",
          nameService: "Animacion",
          count: 1
        }
      ],
      info: {
        text: "Más informacion",
        url: "#"
      },
      button: {
        text: "Contratar",
        url: "#"
      }
    }
  ]
};

export default initialState;
