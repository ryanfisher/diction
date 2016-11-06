defmodule Diction.DefinitionTest do
  use Diction.ModelCase

  alias Diction.Definition

  @valid_attrs %{definition: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Definition.changeset(%Definition{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Definition.changeset(%Definition{}, @invalid_attrs)
    refute changeset.valid?
  end
end
