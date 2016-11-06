defmodule Diction.Definition do
  use Diction.Web, :model

  schema "definitions" do
    field :definition, :string
    belongs_to :word, Diction.Word

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:definition])
    |> validate_required([:definition])
  end
end
