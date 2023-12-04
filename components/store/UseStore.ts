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
    theme: undefined,
    setTheme: (theme : string) => set({theme})
}))
export const useOutput = create((set) => ({
    output: undefined,
    setOutput: (output : string) => set({output})
}))
export const useLoading = create((set) => ({
    isLoading: undefined,
    setLoading: (opt:boolean) => set({isLoading:opt}),
    isGenerating: false,
    setGenerating: (gen:boolean) => set({isGenerating:gen})

}))