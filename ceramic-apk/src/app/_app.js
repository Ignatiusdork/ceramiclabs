'use client';

import { Provider } from "@self.id/react";
//import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

//const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    return (  
        <Provider client={{ ceramic: "testnet-clay"}}>
          <Component {...pageProps} />;
        </Provider>      
    );
}
  
export default MyApp;