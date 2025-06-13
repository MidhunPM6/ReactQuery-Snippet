import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import  axios from 'axios'

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axios('http://localhost:3008/users')

      return response.data
    },
    refetchOnWindowFocus: false
  })
}

export const useAddUser = () => {
  const query = useQueryClient()
  return useMutation({
    mutationFn: async () => {
      await axios('http://localhost:3008/users', {
        method: 'POST',
        data: {
          id: 13,
          name: 'John Doe',
          email: 'X2c9I@example.com',
          role: 'Admin'
        }
      })
    },
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ['users'] })
    }
  })
}
