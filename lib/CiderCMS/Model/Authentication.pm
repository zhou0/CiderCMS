package CiderCMS::Model::Authentication;

use strict;
use base 'Catalyst::Model::DBIC::Schema';

__PACKAGE__->config(
    schema_class => 'CiderCMS::Schema',
    connect_info => [  # WARNING, these settings may be overwritten by the config file!
        'dbi:Pg:dbname=cidercms',
        '',
        '',
        {
            pg_enable_utf8      => 1,
            quote_char          => '"',
            name_sep            => '.',
            disable_sth_caching => 1,
        },

    ],
);

=head1 NAME

CiderCMS::Model::Authentication - Catalyst DBIC Schema Model

=head1 SYNOPSIS

See L<CiderCMS>

=head1 DESCRIPTION

L<Catalyst::Model::DBIC::Schema> Model using schema L<CiderCMS::Schema>

=head1 GENERATED BY

Catalyst::Helper::Model::DBIC::Schema - 0.6

=head1 AUTHOR

Stefan Seifert

=head1 LICENSE

This library is free software, you can redistribute it and/or modify
it under the same terms as Perl itself.

=cut

1;