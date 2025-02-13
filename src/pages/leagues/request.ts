// import { useEffect } from 'react';
// import { useAxios } from 'utils/axiosContext';

// interface Form {
//     name: string;
//     // Add other form fields as needed
// }

// interface SetForm {
//     (form: Form): void;
// }

// const useFetchTeams = (form: Form, setForm: SetForm): void => {
//     const axios = useAxios();

//     const index = async (): Promise<void> => {
//         try {
//             console.log(form.name);
//             const response = await axios.get(`/leagues`);
//             const data = response.data;
//             console.log(data);
//             // Handle the data as needed
//         } catch (error) {
//             console.error('Error fetching teams:', error);
//         }
//     };

//     useEffect(() => {
//         // index();
//     }, []);
// };

// export default useFetchTeams;