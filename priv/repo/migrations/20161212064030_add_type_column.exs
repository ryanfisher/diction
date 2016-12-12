defmodule Diction.Repo.Migrations.AddTypeColumn do
  use Ecto.Migration

  def change do
    alter table(:definitions) do
      add :type, :string
    end
  end
end
