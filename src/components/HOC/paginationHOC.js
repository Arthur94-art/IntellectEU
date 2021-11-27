import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTeams } from "../../actions";
import s from '../teams/pagination/pagination.module.scss'

//  const withData = (PagContainer, Pag, func) => {

//     const PagContainer = () => {
//         const dispatch = useDispatch();
//         const [page, setPage] = useState(1);
//         const [selectValue, setSelectValue] = useState(10);

//         useEffect(() => {
//             dispatch(func(page, selectValue));

//         },
//             [dispatch, page, selectValue]);

//         const onHandleNextClcik = () => {
//             setPage(page + 1);
//         }
//         const onHandlePrevClcik = () => {
//             setPage(page - 1);
//         }

//         function getArrPerPAges(num) {
//             const newArr = [];
//             for (let i = 0; i < num; i++) {
//                 newArr.push(i + 1)
//             }
//             return newArr;
//         }

//         function getArrSelecValue(arr, curr, total) {
//             let newArr = [];
//             if (arr.length < 10 && curr === total) {
//                 for (let i = 0; i < arr.length; i++) {
//                     newArr.push(i + 1);
//                 }
//                 return newArr
//             } else {
//                 return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//             }

//         }
//         return (
//             <div>
//                 <Pag
//                     selectValue={selectValue} setSelectValue={setSelectValue}
//                     onHandleNextClcik={onHandleNextClcik}
//                     onHandlePrevClcik={onHandlePrevClcik}
//                     meta={props.meta}
//                     getArrPerPAges={getArrPerPAges}
//                     setPage={setPage}
//                     page={page}
//                     teams={props.teams}
//                     getArrSelecValue={getArrSelecValue}
//                 />
//             </div>
//         )
//     }

//     return <PagContainer />

// };




// const withData = (Component) => () => {
//     const [results, setResults] = useState([]);

//     const fetchData = async () => {
//       const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//       const data = await response.json();
//       setResults(data.results);
//     };

//     useEffect(() => {
//       fetchData();
//     }, []);

//     return <Component results={results} />;
//   };

//   const ListResults = ({ results }) => {
//     return (
//       <ul>
//         {results.map((pokemon) => (
//           <li key={pokemon.name}>{pokemon.name}</li>
//         ))}
//       </ul>
//     );
//   };

//   export default withData(ListResults);