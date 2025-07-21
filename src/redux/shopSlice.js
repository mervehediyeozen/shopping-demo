import { createSlice } from "@reduxjs/toolkit";

 const shopSlice = createSlice({
    name :"shop",
    initialState: {
        userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
        isLogged: !!localStorage.getItem("userInfo"),
        registeredUser: JSON.parse(localStorage.getItem("registeredUser")) || [],
        box: JSON.parse(localStorage.getItem("userInfo"))?.box || [],
        order: JSON.parse(localStorage.getItem("userInfo"))?.order || [],
        total: 0 ,
        address: JSON.parse(localStorage.getItem("userInfo"))?.address || [],
        filteredProduct : [],
        filteredValues : [],
        filterType : [],
        productsType : [],
        productLink  : [],
        currentLink : [],
        selectType : [],
        filterProducts: [],
        selectKind: [],
        mostLiked: [],
        favLink : [],
        favProducts: JSON.parse(localStorage.getItem("userInfo"))?.favProducts || [],
        menu : {
            filterList: true,
            filterProducts : true,
            mainPageSlide : false,

        },
    },
    reducers: {
        createLogin : (state,action) => {
            const {name, password, mail , surname} = action.payload;
            const newUser = { box :[], order:[], address:[], name , password , mail, surname } 
            state.userInfo = newUser;
            state.box = [];
            state.order = []; 
            state.registeredUser.push(newUser);
            localStorage.setItem("userInfo" , JSON.stringify(action.payload))
            localStorage.setItem("registeredUser", JSON.stringify(state.registeredUser));
        },
        login : (state,action) => {
            const isUser = state.registeredUser.find((user) => user.name === action.payload.name && user.password === action.payload.password)
            if(isUser) {
                state.isLogged= true;
                state.userInfo = isUser;        
                state.box = isUser.box || [];
                state.order = isUser.order || [];
                state.address = isUser.address || [];
                state.favProducts = isUser.favProducts || [];
                localStorage.setItem("userInfo", JSON.stringify(isUser));
            }
            else{
                state.isLogged = false;
                state.userInfo = null;
            }
        },
        logout : (state) => {
            state.userInfo = null;
            state.isLogged = false;
            state.box = [];
            state.order = [];
            state.address = [];
            localStorage.removeItem("userInfo");

        },
        getOrder: (state, action) => {
            const id = Date.now().toString();
            const date = new Date().toISOString();
            const newOrder = {
                id,
                date,
                address: action.payload.addresT,
                cardNo: action.payload.cardNo,
                cardDate: action.payload.cardDate,
                cardCvv: action.payload.cardCvv,
                items: state.box,
                totalPrice: state.total,
            };

            state.order.push(newOrder);
            state.total = 0;

            if (state.userInfo) {
                const updatedOrder = [...state.order];

                state.order = updatedOrder;

                state.userInfo = {
                ...state.userInfo,
                order: updatedOrder,
                };

                const updatedUsers = state.registeredUser.map((user) => {
                if (
                    user.name === state.userInfo.name &&
                    user.password === state.userInfo.password
                ) {
                    return { ...user, order: updatedOrder };
                }
                return user;
                });

                state.registeredUser = updatedUsers;
                localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
                localStorage.setItem("registeredUser", JSON.stringify(updatedUsers));
            }
            },
                createBasket: (state, action) => {
                const newItem = action.payload;
                const existingItem = state.box.find(item => item.id === newItem.id);

                if (existingItem) {
                    // Ürün varsa çıkar
                    state.box = state.box.filter(item => item.id !== newItem.id);
                } else {
                    // Yoksa ekle
                    state.box.push(newItem);
                }

                // Toplamı güncelle
                state.total = state.box.reduce((acc, product) => acc + product.price, 0);

                // Kullanıcı varsa güncelle
                if (state.userInfo) {
                    const updatedBox = [...state.box]; // kopyasını al
                    state.userInfo = {
                    ...state.userInfo,
                    box: updatedBox,
                    };

                    // registeredUser içindeki ilgili kullanıcıyı güncelle
                    const updatedUsers = state.registeredUser.map(user => {
                        if (user.name === state.userInfo.name && user.password === state.userInfo.password) {
                            return { ...user, box: updatedBox };
                        }
                        return user;
                    });

                    state.registeredUser = updatedUsers;

                    // localStorage'ı güncelle
                    localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
                    localStorage.setItem("registeredUser", JSON.stringify(updatedUsers));
                }
            },


            removeFromBasket: (state, action) => {
            state.box = state.box.filter(
                (item) => item.id !== action.payload
            );
            state.total = state.box.reduce(
                (acc, product) => acc + product.price,
                0
            );
            },
            addAddress : (state ,action) => {
                const {title , openAddress ,city ,town , phone, no } = action.payload;
                const newAddress = {
                    ...state.address,
                    id : Date.now().toString(),
                    date : new Date().toISOString(),
                    title,
                    openAddress,
                    city,
                    town,
                    no,
                    phone,
                }
                state.address.push(newAddress);
                    if (state.userInfo) {
                        state.userInfo.address = [...(state.userInfo.address || []), newAddress];
                    }     
                    const updatedUsers = state.registeredUser.map(user => {
                        if (user.name === state.userInfo.name && user.password === state.userInfo.password) {
                            return {
                                ...user,
                                address: [...(user.address || []), newAddress]
                            };
                        }
                        return user;
                    });

                    state.registeredUser = updatedUsers;
                    localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
                    localStorage.setItem("registeredUser", JSON.stringify(updatedUsers));
                
            },
            deleteAddress : (state,action) => {
                const idToDelete = action.payload;  
                if (state.userInfo) {
                    state.userInfo.address = state.userInfo.address.filter(ad => ad.id !== idToDelete);
                }

                // registeredUser içindeki kullanıcıyı güncelle
                const updatedUsers = state.registeredUser.map(user => {
                    if (user.name === state.userInfo.name && user.password === state.userInfo.password) {
                        return {
                            ...user,
                            address: user.address.filter(ad => ad.id !== idToDelete)
                        };
                    }
                    return user;
                });

                state.registeredUser = updatedUsers;

                    // localStorage'ı güncelle
                    localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
                    localStorage.setItem("registeredUser", JSON.stringify(updatedUsers));
                },
                filterProducts  : (state,action) => {
                    const {value , productValues}= action.payload;
                    const findValue= state.filteredValues.find((prevState) =>
                     prevState.includes(value))
                    if(findValue){
                        state.filteredValues = state.filteredValues.filter((item) => item != value)
                    }
                    else {
                        state.filteredValues.push(value)
                    }
                 state.filteredProduct = productValues
                    .filter(product => !!product)
                    .filter(product => {
                        return state.filteredValues.some(filter => {
                        if (filter === "vcheap") return product.price < 100;
                        if (filter === "cheap") return product.price >= 100 && product.price < 250;
                        if (filter === "normall") return product.price >= 250 && product.price < 500;
                        if (filter === "exp") return product.price >= 500 && product.price < 750;
                        if (filter === "vrexp") return product.price >= 750 && product.price < 1000;
                        if (filter === "vvexp") return product.price >= 1000;

                        return (
                            product.wideness?.toLowerCase() === filter.toLowerCase() ||
                            product.color?.toLowerCase() === filter.toLowerCase() ||
                            product.brand?.toLowerCase() === filter.toLowerCase() ||
                            product.style?.toLowerCase() === filter.toLowerCase() ||
                            product.material?.toLowerCase() === filter.toLowerCase() ||
                            product.type?.toLowerCase() === filter.toLowerCase()
                        );
                        });
                    });
                },

                linkProducts : (state, action) => {
                  
                    const { link, product } = action.payload;
                        state.productLink.push(link);
                    

                   
                    const filtered = product.filter((pro) => state.productLink.includes(pro.kind));
                    state.currentLink = filtered;
                    },
                      linkTypeProducts: (state, action) => {
                       const { kind, type, products } = action.payload;
                        state.selectKind = kind;
                        state.selectType = type;
                        state.filterProducts = products.filter(
                            (product) => product.kind === kind && product.type === type
                        );
                        },
                    


                  toggleAllMenu: (state, action) => {
                    const menuName = action.payload;
                    if (state.menu.hasOwnProperty(menuName)) {
                        state.menu[menuName] = !state.menu[menuName];
                    }
                    },
            mostLikedProducts: (state, action) => {
            const { link, product } = action.payload;
            state.favLink = link;

            if (!product || !Array.isArray(product)) {
                state.mostLiked = [];
                return;
            }

            console.log("ÜRÜNLER:", product);

            const filteredByKind = product.filter(
                (prod) => prod && prod.kind === link
            );
            console.log("KIND FİLTRESİ:", filteredByKind);
            const favFiltered = filteredByKind.filter(
                (prod) => Number(prod.fav) >= 1000
            );
            console.log("FAV FİLTRESİ (5000+):", favFiltered);

            state.mostLiked = favFiltered;
            },
            
        favButton: (state, action) => {
            const { product } = action.payload;

          
            const isExist = state.favProducts.find(p => p.id === product.id);

            if (isExist) {
              
                state.favProducts = state.favProducts.filter(p => p.id !== product.id);
            } else {
                
                state.favProducts.push(product);
            }
                    // Kullanıcı giriş yaptıysa güncelle
            if (state.userInfo) {
                const updatedFavs = [...state.favProducts];
                state.userInfo = {
                    ...state.userInfo,
                    favProducts: updatedFavs,
                };

                const updatedUsers = state.registeredUser.map(user => {
                    if (user.name === state.userInfo.name && user.password === state.userInfo.password) {
                        return { ...user, favProducts: updatedFavs };
                    }
                    return user;
                });

                state.registeredUser = updatedUsers;

                localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
                localStorage.setItem("registeredUser", JSON.stringify(updatedUsers));
            }

         },

       handleSearchButton: (state, action) => {
  const { value, products } = action.payload;

  if (!value || !products) return;

  const searchValue = value.toLowerCase();

  // Arama sonucu eşleşen ürünler
  const matchedProducts = Object.values(products).filter(product => 
    product.kind.toLowerCase().includes(searchValue) ||
    product.type.toLowerCase().includes(searchValue)
  );

  state.filteredProduct = matchedProducts; // Eşleşen ürünleri Redux state'e koy
},



                

  

    },

})

export default shopSlice.reducer;
export const {createLogin , login , logout , getOrder , createBasket , removeFromBasket , deleteAddress , addAddress , filterProducts , linkProducts , toggleAllMenu , linkTypeProducts , mostLikedProducts ,favButton , handleSearchButton } = shopSlice.actions;