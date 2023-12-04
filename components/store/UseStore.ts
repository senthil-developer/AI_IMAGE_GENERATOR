import {create} from 'zustand'

interface State { }

export const useImage = create<State>((set) => ({
    imageUrl : undefined,
    setImageUrl : (imageUrl : string) => set({imageUrl})
}))

export const useRoom = create<State>((set) => ({
    room: 'living room',
    setRoom: (room : string) => set({room})
}))

export const useTheme = create((set) => ({
    theme: 'living room',
    setTheme: (theme : string) => set({theme})
}))