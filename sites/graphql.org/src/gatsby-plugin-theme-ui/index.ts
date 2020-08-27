interface Colors {
  primary: string;
  text: string;
  background: string;
}

interface Theme {
  colors: Colors;
}

const theme: Theme = {
  colors: {
    primary: '#e10098',
    text: '#202020',
    background: '#f5f6f8',
  },
};

export default theme;
