export interface message{
    event : 'send-message' | 'ice-candidates' | 'send-offer' | 'send-answer' | 'join-room' | 'left-room',
    message : string,
    email: string,
    roomid:string
    rtcoffer? : RTCSessionDescription | null | undefined
    icecandidates?: RTCIceCandidate
    rtcanswer?: RTCSessionDescription | null | undefined
    to?:string,
    name? : string
    image? :string
}