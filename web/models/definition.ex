defmodule Diction.Definition do
  use Diction.Web, :model

  schema "definitions" do
    field :definition, :string
    field :type, :string
    belongs_to :word, Diction.Word

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:definition, :type, :word_id])
    |> validate_required([:definition, :type, :word_id])
  end

  defmodule Queries do
    def random do
      {:ok, query} = Ecto.Adapters.SQL.query(
        Diction.Repo,
        "SELECT id, definition, word_id from definitions ORDER BY RANDOM() LIMIT 4",
        [])
      %Postgrex.Result{rows: rows} = query
      rows |> Enum.map(fn([id, definition, word_id]) ->
        %{id: id, definition: definition, word_id: word_id}
      end)
    end
  end
end
