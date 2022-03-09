<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220309111626 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE animals (id INT AUTO_INCREMENT NOT NULL, trees_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, family VARCHAR(500) NOT NULL, INDEX IDX_966C69DDDFAEF485 (trees_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE animals ADD CONSTRAINT FK_966C69DDDFAEF485 FOREIGN KEY (trees_id) REFERENCES trees (id)');
        $this->addSql('DROP INDEX description ON trees');
        $this->addSql('ALTER TABLE trees CHANGE description description LONGTEXT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE animals');
        $this->addSql('ALTER TABLE trees CHANGE description description TEXT CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('CREATE FULLTEXT INDEX description ON trees (description)');
    }
}
