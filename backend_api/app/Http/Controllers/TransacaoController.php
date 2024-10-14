<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transacao;

class TransacaoController extends Controller
{
    public function index()
    {
        return Transacao::all();
    }

    public function store(Request $request)
    {
        $request->merge([
            'tipo' => ucfirst($request->input('tipo')),
        ]);

        $request->validate([
            'tipo' => 'required|in:Entrada,Saida',
            'descricao' => 'required|string',
            'valor' => 'required|numeric',
            'data' => 'required|date',
        ]);

        $transacao = Transacao::create($request->all());

        return response()->json($transacao, 201); 
    }

    public function show()
    {
        $entradas = Transacao::where('tipo', 'Entrada')->sum('valor');
        $saidas = Transacao::where('tipo', 'Saida')->sum('valor');
        $saldo = $entradas - $saidas;

        return response()->json([
            'total_entradas' => $entradas,
            'total_saidas' => $saidas,
            'saldo' => $saldo,
        ]);
    }

    public function buscarPorTipo(Request $request)
    {
        $request->validate([
            'tipo' => 'required|in:Entrada,Saída',
        ]);

        $tipo = $request->input('tipo');
        $transacoes = Transacao::where('tipo', $tipo)->get();

        return response()->json($transacoes);
    }

    public function buscarPorId(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
        ]);

        $id = $request->input('id');
        $transacao = Transacao::find($id);

        if ($transacao) {
            return response()->json($transacao);
        } else {
            return response()->json(['msg' => 'Transação não encontrada'], 404);
        }
    }

    public function destroy($id)
    {
        $transacao = Transacao::find($id);

        if ($transacao) {
            $transacao->delete();
            return response()->json(['msg' => 'Transação deletada com sucesso.']);
        } else {
            return response()->json(['msg' => 'Transação não encontrada'], 404);
        }
    }
}
