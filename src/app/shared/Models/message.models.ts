export interface MessageDTO {
    _id: string;
    conversationId: string;
    senderId: string;
    senderModel: 'User' | 'Doctor';
    content: {
        text?: string;
        fileUrl?: string;
        fileName?: string;
        fileSize?: number;
        fileType?: string;
    };
    messageType: 'text' | 'audio' | 'video' | 'document';
    createdAt: Date;
    meta: {
        member: string;
        memberType: 'User' | 'Doctor';
        delivered: boolean;
        read: boolean;
    }[];
}
