import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { CompleterData, CompleterItem } from 'ng2-completer';

export class CustomData extends Subject<CompleterItem[]> implements CompleterData {
    constructor(private http: Http) {
        super();
    }
    public search(term: string): void {
        this.http.get('https://api-adresse.data.gouv.fr/search/?q=' + term + '&limit=15')
            .map((res: Response) => {
                // Convert the result to CompleterItem[]
                const data = res.json();
                const matches: CompleterItem[] = data.map((adresse: any) => this.convertToItem(adresse));
                this.next(matches);
            })
            .subscribe();
    }

    public cancel() {
        // Handle cancel
    }

    public convertToItem(data: any): CompleterItem | null {
        if (!data) {
            return null;
        }
        // data will be string if an initial value is set
        return {
            title: typeof data === 'string' ? data : data.features.label
        } as CompleterItem;
    }
}
