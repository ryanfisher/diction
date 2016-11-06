defmodule Diction.Word do
  use Diction.Web, :model

  schema "words" do
    field :word, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:word])
    |> validate_required([:word])
  end
end
