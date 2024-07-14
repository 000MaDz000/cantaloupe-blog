export default function ValidateId(id: any) {
    try {

        const ID_LENGTH = 24;
        if (!id || typeof id.toString() !== "string" || ID_LENGTH !== id.length) return false;
        return true;
    }
    catch (err) {
        return false;
    }
}