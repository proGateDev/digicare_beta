
import { AuthProvider } from '../context/auth';

import "../styles/globals.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

export default function App({ Component, pageProps, session }) {
  return (
    <AuthProvider>



      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />

      </QueryClientProvider>
    </AuthProvider>

  )
}


