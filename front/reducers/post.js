

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫번째 게시글 #해시태크 #익스프레스',
        Image: [{

        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 개정판이 나왔군요!',
        }, {
            User: {
                nickname: 'hero',
            },
            content: '너무 좋아요!!',
        }]
    }],
    imagePaths: [],
    postAdded: false
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미 데이터 입니다.',
    User: {
        id: 1,
        nickname: "kim",
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;