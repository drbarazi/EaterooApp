import firebase from '../fb';
export function getFoods(){
    return (dispatch) => {
        dispatch({
            type:"FOODS_LOADING_STATUS",
            payload:true
        })
        firebase.database().ref('/foods').on('value', snapshot =>{
            dispatch({
              type: 'FOODS_FETCH',
              payload: snapshot.val(),
                    })
                    dispatch({
                        type:"FOODS_LOADING_STATUS",
                        payload:false
                    })
        })

       
                               
    }
}



export function createFoods(name, kitchen_name, price, image_url, description) {
const gambar = image_url ?? 'https://asset.kompas.com/crops/rPs9P_5XQyaC6LYhiDHWtAkF0tU=/0x0:1000x667/750x500/data/photo/2021/05/14/609df58009457.jpg';
  return dispatch => {
    firebase
      .database()
      .ref('/foods')
      .push({name, kitchen_name, price, gambar, description});
  };
}


export function deleteFood(key){
    return (dispatch) => {
        firebase.database().ref(`/foods/${key}`).remove()
    }
}

export function editFood(name, kitchen_name, price, image_url, description, key){
    return (dispatch) => {
        firebase
          .database()
          .ref(`/foods`)
          .child(key)
          .update({name, kitchen_name, price, image_url, description});
    }
}



