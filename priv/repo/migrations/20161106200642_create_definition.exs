defmodule Diction.Repo.Migrations.CreateDefinition do
  use Ecto.Migration

  def change do
    create table(:definitions) do
      add :definition, :string, null: false
      add :word_id, references(:words, on_delete: :nothing), null: false

      timestamps()
    end
    create index(:definitions, [:word_id])

  end
end
