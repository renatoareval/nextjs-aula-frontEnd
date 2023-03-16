import { receitas } from "../../../../dados"
export default function Receitas(req, res) {
    return res.status(200).json(receitas)
}