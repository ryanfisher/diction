defmodule Diction.Api.QuestionController do
  use Diction.Web, :controller

  def next(conn, _params) do
    json conn, random
  end

  defp random do
    rows = Diction.Definition.Queries.random
    correct = rows |> List.to_tuple |> elem((rows |> length |> :rand.uniform) - 1)
    %{
      word: Diction.Repo.get(Diction.Word, correct.word_id).word,
      definitions: Enum.map(rows, fn %{definition: definition, id: id} -> %{text: definition, id: id} end),
      correctChoice: correct.id
    }
  end
end
