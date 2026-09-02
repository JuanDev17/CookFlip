import { inject, Injectable } from "@angular/core";
import { PopularBoardsMock } from "../../../api/mocks/popular-boards.mock";
import { PopularBoard } from "../../../api/types/board.type";

@Injectable({
    providedIn: 'root'
})

export class BoardService {

    #boardService = inject(PopularBoardsMock);

    trendingBoards = this.#boardService.popularBoards;
}
