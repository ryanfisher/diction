defmodule Diction.Api.QuestionController do
  use Diction.Web, :controller

  def next(conn, _params) do
    val = random
    IO.inspect val
    json conn, val
  end

  defp random do
    rows = Diction.Definition.Queries.random
    correct = rows |> List.to_tuple |> elem(rows |> length |> :rand.uniform)
    %{
      word: Diction.Repo.get(Diction.Word, correct.word_id).word,
      definitions: rows,
      correctChoice: correct.id
    }
  end
end
