import React from 'react';

const Head = () => {
  const [titlePage, setTitlePage] = React.useState(null);

  React.useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        setTitlePage('Atuação em Direito de Família e Previdenciário');
      } else {
        setTitlePage(null);
      }
    });
  }, []);

  React.useEffect(() => {
    document.title = titlePage || 'Sandy Carvalho Advocacia';
  }, [titlePage]);

  return <></>;
};

export default Head;
