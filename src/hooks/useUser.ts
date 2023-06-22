import { UserEntity } from 'types'

type ReturnData = {
    currentUser: UserEntity;
};

export const useUser = (): ReturnData => {
    const currentUser: UserEntity = {
        id: 5,
        username: 'Yurii'
    }

    return { currentUser }
}
