defmodule Diction.Repo.Migrations.CreateWord do
  use Ecto.Migration

  def change do
    create table(:words) do
      add :word, :string, null: false

      timestamps()
    end

    create unique_index(:words, [:word])
  end
end
