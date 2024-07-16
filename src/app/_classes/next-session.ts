import Cryptr from "cryptr";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

export default class NextSession<T> {
    data: Partial<T>;
    crypt: Cryptr;
    cookies: ReadonlyRequestCookies;

    constructor(data?: T) {
        const crypt = new Cryptr(process.env.SESSION_PASSWORD as string);
        const cookie = cookies();
        this.crypt = crypt;
        this.cookies = cookie;

        const val = cookie.get("SESSION");
        if (val?.value) {
            try {
                this.data = JSON.parse(crypt.decrypt(val.value));
            }
            catch (err) {
                this.data = data || {} as any
            }
        }
        else {
            this.data = data || {} as any;
        }
    }

    async save() {
        const val = this.crypt.encrypt(JSON.stringify(this.data));
        this.cookies.set("SESSION", val);
    }
}